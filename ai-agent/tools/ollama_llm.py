from langchain_community.chat_models import ChatLiteLLM

def get_llm():
    return ChatLiteLLM(
        model="huggingface/mistralai/Mistral-7B-Instruct-v0.3",
        api_key="",
        temperature=0.7,
        max_tokens=1024
    )
