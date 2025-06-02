from crewai import Agent
from tools.ollama_llm import get_llm

def create_reviews_summarizer_agent():
    return Agent(
        role="Reviews Summarizer",
        goal="Analyze and summarize user reviews to extract key insights, pros, cons, and overall sentiment",
        backstory=(
            "You are an expert in understanding and summarizing product reviews from multiple sources. "
            "You distill large volumes of user feedback into clear summaries that highlight important trends, "
            "common praises, and frequent complaints, helping users make informed decisions."
        ),
        llm=get_llm(),
        verbose=True,
        allow_delegation=False
    )
