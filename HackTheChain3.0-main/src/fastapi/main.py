from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
from model import router as chatbot_router  # Import chatbot router

app = FastAPI()

# Add CORSMiddleware to allow requests from specified origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can allow specific origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Include chatbot router
app.include_router(chatbot_router)

@app.get("/")
def read_root():
    return {"Data": "Chatbot Server v1.0"}
