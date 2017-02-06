# [KONG][website-url] :heavy_plus_sign: [Kubernetes Deployment](http://kubernetes.io/)

[![][kong-logo]][website-url]

Kong can easily be provisioned to Kubernetes cluster using the following steps:


2. **Deploy a Kong supported Database**
    
   ## Postgres
   
    Using `postgres.yaml` deploy a Postges `Service` and a `ReplicationController` to the cluster created in the last step.

    When ready, deploy with the following command:

    ```bash
    $ kubectl create -f postgres.yaml
    ```
   

3. **Deploying Kong on the cluster**

    Using `kong.yaml`, deploy a  Kong `Service` and a `Deployment` to the cluster created in the last step. Update the
    environment variable `KONG_DNS_RESOLVER` with the IP of the DNS resolver you want use or Kubernetes `kube-dns` IP. Use following 
    command to get the `kube-dns` IP
    
    ```bash
    $ kubectl get svc kube-dns --namespace=kube-system | grep kube-dns | awk '{print $2}'
    ``` 
    When ready, deploy with the following command:

    ```bash
    $ kubectl create -f kong.yaml
    ```

3. **Verifying deployment**

    Now you can see the resources that have been deployed using `kubectl`:

    ```bash
    $ kubectl get rc
    $ kubectl get deployment
    $ kubectl get pods
    $ kubectl get services
    $ kubectl get logs <pod-name>
    ```
    you can test Kong:

    ```bash
    $ curl <A NODE PRIVATE IP>:30001
    $ curl <EXTERNAL_IP>:30008
    ```

3. **Using Kong:**

	To add a new microservice 

	```bash
	$ curl -i -X POST \
	  --url http://10.67.20.12:30001/apis/ \
	  --data 'name=<microservicename>' \
	  --data 'upstream_url=http://<kubernetes-service>.default.svc.cluster.local:8080/' \
	  --data 'request_path=/<microservicename>/' \
	  --data 'strip_request_path=true' 
	```

	Where the ip `10.67.20.12` corresponds to a private node IP of one of the nodes running kubernetes.
	`microservicename` is an arbitrary name for your microservice.
	`kubernetes-service` is the name of  the kubernetes service that manages the entrypoints to the desired microservice. To find the name of the service run "kubectl svc" on the kubernetes master node

	For other operations read the official Kong documentation: https://getkong.org/docs/0.9.x/admin-api/


[kong-logo]: http://i.imgur.com/4jyQQAZ.png
[website-url]: https://getkong.org/
[website-badge]: https://img.shields.io/badge/GETKong.org-Learn%20More-43bf58.svg
[documentation-url]: https://getkong.org/docs
