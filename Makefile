DJANGO_PORT := 8000

run-expo:
    @echo "Starting Expo app..."
    npx expo start

run-django:
    @echo "Starting Django server..."
    python manage.py runserver 0.0.0.0:$(DJANGO_PORT)

start:
    @echo "Starting Expo app and Django server..."
    make run-expo & make run-django

stop:
    @echo "Stopping Expo app and Django server..."
    pkill -f "expo start"
    pkill -f "python manage.py runserver"

.DEFAULT_GOAL := start
