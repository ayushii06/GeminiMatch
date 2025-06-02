from crewai import Agent
from tools.ollama_llm import get_llm

def create_product_comparison_agent():
    return Agent(
        role="Product Comparison Expert",
        goal="Compare multiple products based on user requirements, highlighting pros, cons, and best value for money",
        backstory=(
            "You are a highly skilled product comparison specialist who analyzes and compares various tech products. "
            "You provide detailed, unbiased comparisons based on user needs, budget, features, and use cases, helping "
            "users choose the best product for their situation."
        ),
        llm=get_llm(),
        verbose=True,
        allow_delegation=False
    )
