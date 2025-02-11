from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import json

def serialize_index(index): return list(index)

def chatbot_response(user_input):
    # Simulated chatbot logic
    responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm doing great. How can I help?",
        "bye": "Goodbye! Have a great day!",
        "help": "Sure! Let me know how I can assist you."
    }
    for key in responses:
        if key in user_input.lower():
            return responses[key]
    return "I'm sorry, I didn't understand that. Can you please rephrase?"

# Request payload model
class ChatRequest(BaseModel):
    message: str

router = APIRouter()

@router.post("/chatbot/")
async def chatbot_endpoint(chat_request: ChatRequest):
    try:
        # Simulated chatbot logic
        user_message = chat_request.message
        bot_response = chatbot_response(user_message)

        response = {
            "statusCode": 200,
            "body": {"user_message": user_message, "bot_response": bot_response}
        }
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
