import requests

def parse_user_intent(user_input):
    prompt = f"""
You are an assistant that extracts structured shopping needs from user queries.

Input: "I need a phone under ₹25,000 for gaming and good camera"
Output: {{
  "product_type": "phone",
  "budget": 25000,
  "use_cases": ["gaming", "camera"]
}}

Input: "Looking for a smartwatch under ₹5k with sleep tracking and heart rate monitor"
Output: {{
  "product_type": "smartwatch",
  "budget": 5000,
  "use_cases": ["sleep tracking", "heart rate monitor"]
}}

Input: "{user_input}"
Output:
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "mistral",
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()["response"]
    return result.strip()

# 🧪 Example usage
if __name__ == "__main__":
    query = input("Enter your tech need: ")
    structured = parse_user_intent(query)
    print("\nParsed Result:\n", structured)
