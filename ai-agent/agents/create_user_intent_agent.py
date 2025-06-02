from crewai import Agent
from tools.ollama_llm import get_llm

def create_user_intent_agent():
    return Agent(
        role="Intent Parser",
        goal="Understand and extract structured user needs for product recommendation",
        backstory="You are a helpful AI assistant specialized in parsing tech shopping requirements.",
        llm=get_llm(),
        verbose=True,
        allow_delegation=False,
    )
