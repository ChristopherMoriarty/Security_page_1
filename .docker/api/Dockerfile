FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11

COPY ../api/requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir -r /app/requirements.txt

COPY ../api /app

WORKDIR /app/src

EXPOSE 8080

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]