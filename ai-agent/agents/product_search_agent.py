from crewai import Agent
from tools.ollama_llm import get_llm

def create_product_search_agent():
    return Agent(
        role="Product Search Expert",
        goal="Search the internet for best matching products based on parsed user need",
        backstory=(
            "You are a highly skilled product researcher who finds the most relevant and affordable "
            "tech products based on user's requirements, budget, and use cases."
        ),
        llm=get_llm(),
        verbose=True,
        allow_delegation=False
    )
