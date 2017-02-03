
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
    $ curl <A NODE PRIVETE IP>:30001
    $ curl <EXTERNAL_IP>:30008
    ```

3. **Using Kong:**

    Quickly learn how to use Kong with the [5-minute Quickstart](/docs/latest/getting-started/quickstart).


## Enterprise Support

Support, Demo, Training, API Certifications and Consulting available at http://getkong.org/enterprise.

[kong-logo]: http://i.imgur.com/4jyQQAZ.png
[website-url]: https://getkong.org/
[website-badge]: https://img.shields.io/badge/GETKong.org-Learn%20More-43bf58.svg
[documentation-url]: https://getkong.org/docs
