from fastapi import FastAPI, APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from config import SMTP_USER, SMTP_PASSWORD, TARGET_EMAIL

app = FastAPI()
router = APIRouter()

# Конфигурация SMTP (замени на свои данные)
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

class EmailRequest(BaseModel):
    name: str
    phone: str

def send_email(name: str, phone: str):
    subject = "Новая заявка"
    body = f"Имя: {name}\nТелефон: {phone}"
    
    msg = MIMEMultipart()
    msg["From"] = SMTP_USER
    msg["To"] = TARGET_EMAIL  # Здесь отправляем на один выбранный email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))
    
    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(SMTP_USER, TARGET_EMAIL, msg.as_string())
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка при отправке email: {e}")

@router.post("/send-email/")
async def send_email_endpoint(request: EmailRequest):
    send_email(request.name, request.phone)
    return {"message": "Email успешно отправлен"}

app.include_router(router)