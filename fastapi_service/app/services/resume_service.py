import pdfplumber 
from io import BytesIO

def parse_resume(file_bytes: bytes) -> str:
  text_context = []
  
  with pdfplumber.open(BytesIO(file_bytes)) as pdf:
    for page in pdf.pages:
      text = page.extract_text()
      if text:
        text_context.append(text)
        
  return "\n".join(text_context)