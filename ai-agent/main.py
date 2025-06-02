from crewai import Crew, Task
from agents.create_user_intent_agent import create_user_intent_agent
from agents.product_search_agent import create_product_search_agent
from agents.compare_product_agent import create_product_comparison_agent
from agents.get_summarised_review import create_reviews_summarizer_agent
from tools.scraper import scrape_flipkart_products, scrape_flipkart_reviews
import json
import logging

logging.basicConfig(level=logging.INFO)

# 1️⃣ Get user input
user_input = input("Enter your tech need: ")

# 2️⃣ Intent Extraction Agent
intent_agent = create_user_intent_agent()
intent_task = Task(
    description=(
        "Extract the product type, budget in INR, and list of use cases "
        f"from this user query:\n\n\"{user_input}\"\n\n"
        "Return valid JSON like:\n"
        '{"product_type": "...", "budget": ..., "use_cases": ["...", "..."]}'
    ),
    expected_output="Parsed product data as JSON",
    agent=intent_agent
)



# 3️⃣ Product Search Agent
search_agent = create_product_search_agent()

def product_search_task_func(parsed_json):
    logging.info("🔍 Got from intent task:", parsed_json)

    parsed = json.loads(parsed_json)
    query = f"{parsed['product_type']} {' '.join(parsed['use_cases'])}"
    budget = parsed['budget']
    logging.info("🔍 Querying : ", query)

    products = scrape_flipkart_products(query=query, max_price=budget)
    
    return json.dumps(products, indent=2)

product_search_task = Task(
    description="Use parsed user needs to find 5 tech products online that match.",
    expected_output="Top 5 relevant products in JSON format with name, price in INR, details, and buying link.",
    agent=search_agent,
    async_execution=False,
    context=[intent_task],
    output_func=product_search_task_func
)




# 4️⃣ Product Comparison Agent
comparison_agent = create_product_comparison_agent()

def product_comparison_task_func(products_json):
    products = json.loads(products_json)
    prompt = (
        "Compare the following products based on features, price, and value for money:\n\n"
        f"{json.dumps(products, indent=2)}\n\n"
        "Provide a detailed comparison summary highlighting pros and cons of each product."
    )
    return prompt

product_comparison_task = Task(
    description="Compare the found products highlighting pros, cons, and best value.",
    expected_output="Detailed comparison summary text.",
    agent=comparison_agent,
    async_execution=False,
    context=[product_search_task],
    output_func=product_comparison_task_func
)

# 5️⃣ Run the initial Crew (Intent → Search → Comparison)
crew = Crew(
    agents=[intent_agent,search_agent],
    tasks=[intent_task, product_search_task]
)

result = crew.kickoff()
print("\n🎯 Final Recommendations:\n", result)

# 6️⃣ OPTIONAL: Summarise Reviews of a Specific Product
product_url = input("\n🔎 Enter the product URL to summarise reviews (or press Enter to skip): ")

if product_url.strip():
    def summarize_product_reviews(product_url: str):
        reviews = scrape_flipkart_reviews(product_url)
        if not reviews:
            return "No reviews found for this product."

        summariser_agent = create_reviews_summarizer_agent()
        reviews_json = json.dumps(reviews, indent=2)

        summary_task = Task(
            description=(
                f"Summarise these product reviews:\n\n{reviews_json}\n\n"
                "Highlight pros, cons, common patterns, and overall sentiment."
            ),
            expected_output="Concise summary of user feedback",
            agent=summariser_agent
        )

        review_crew = Crew(
            agents=[summariser_agent],
            tasks=[summary_task]
        )

        result = review_crew.kickoff()
        return result

    summary_result = summarize_product_reviews(product_url)
    print("\n📝 Summarised Product Reviews:\n", summary_result)
