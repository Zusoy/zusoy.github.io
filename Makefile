.PHONY: build
build:
	docker-compose build

.PHONY: start
start:
	docker-compose up -d --remove-orphans

.PHONY: stop
stop:
	docker-compose down

.PHONY: kill
kill:
	docker-compose down

.PHONY: test
test:
	docker-compose run --rm node npm run test --verbose

.PHONY: lint
lint:
	docker-compose run --rm node npm run lint
