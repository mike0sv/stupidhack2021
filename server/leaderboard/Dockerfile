FROM python:3.8-slim

COPY requirements.txt .

RUN pip install -r requirements.txt

WORKDIR /app

COPY *.py .

CMD python -u app.py