.DEFAULT_GOAL := help

PROJECT = KillaAssistant
NETWORK = KillaNetwork

install: ## Install the project
	@make up-network
	@make up
	@make up-lb

uninstall: ## Remove the project
	@make down-lb
	@make down
	@make down-network

reload: ## Reload the project
	@make restart
	@make restart-lb

up: ## Up the app container
	docker-compose -p $(PROJECT) -f app/docker-compose.yml up -d

up-lb: ## Up balancer container
	docker-compose -p $(PROJECT) -f loadBalancer/docker-compose.yml up -d

up-network: ## Up the docker network
	docker network create $(NETWORK)

down: ## Stop and remove the app container
	docker-compose -p $(PROJECT) -f app/docker-compose.yml down

down-lb: ## Stop and remove the balancer container
	docker-compose -p $(PROJECT) -f loadBalancer/docker-compose.yml down

down-network: ## Up the docker network
	docker network remove $(NETWORK)

restart: ## Restart app container
	docker-compose -p $(PROJECT) -f app/docker-compose.yml restart

restart-lb: ## Restart balancer container
	docker-compose -p $(PROJECT) -f loadBalancer/docker-compose.yml restart

ssh: ## Connect to container
	docker exec -it $(CONTAINER) bash


help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
