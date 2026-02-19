from fastapi import APIRouter, UploadFile, File, HTTPException
from services.resume_service import parse_resume

router = APIRouter()

@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
  if file.content_type != "application/pdf":
    raise HTTPException(status_code=400, detail="Only PDF files allowed")
  
  file_bytes = await file.read()
  parsed_text = parse_resume(file_bytes=file_bytes)
  
  return {
    "message" : "Resume parsed successfully",
    "preview": parsed_text 
  }