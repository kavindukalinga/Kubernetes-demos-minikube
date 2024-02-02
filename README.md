# Kubernetes-demos-minikube
This repo contains simple web app to show the host name created using nodeJs and deployed in Kubernetes cluster

```bash
minikube start
```
```bash
kubectl apply -f deployment.yaml
```
```bash
kubectl get pods
kubectl get deploy
```
Use `alias k=kubectl` to further use.

```bash
kubectl apply -f service.yaml
```
```bash
k get svc
```
```bash
minikube service k8s-web-hello
```
```bash
k delete -f deployment.yaml -f service.yaml 
```
