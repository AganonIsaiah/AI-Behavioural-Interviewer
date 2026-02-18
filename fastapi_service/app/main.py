from fastapi import FastAPI
from api import resume

app = FastAPI()

app.include_router(resume.router, prefix="/resume", tags=["Resume"])