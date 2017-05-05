curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=addorders' --data 'upstream_url=http://addorders.default.svc.cluster.local:8080/'  --data 'request_path=/addorders/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=addpayments' --data 'upstream_url=http://addpayments.default.svc.cluster.local:8080/'  --data 'request_path=/addpayments/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=lodorders' --data 'upstream_url=http://lodorders.default.svc.cluster.local:8080/'  --data 'request_path=/lodorders/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=lodtransports' --data 'upstream_url=http://lodtransports.default.svc.cluster.local:8080/'  --data 'request_path=/lodtransports/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=lodwarehouses' --data 'upstream_url=http://lodwarehouses.default.svc.cluster.local:8080/'  --data 'request_path=/lodwarehouses/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=pldplans' --data 'upstream_url=http://pldplans.default.svc.cluster.local:8080/'  --data 'request_path=/pldplans/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=pudavailabilities' --data 'upstream_url=http://pudavailabilities.default.svc.cluster.local:8080/'  --data 'request_path=/pudavailabilities/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=pudorders' --data 'upstream_url=http://pudorders.default.svc.cluster.local:8080/'  --data 'request_path=/pudorders/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=sedavailabilities' --data 'upstream_url=http://sedavailabilities.default.svc.cluster.local:8080/'  --data 'request_path=/sedavailabilities/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=sedcatalogs' --data 'upstream_url=http://sedcatalogs.default.svc.cluster.local:8080/'  --data 'request_path=/sedcatalogs/'  --data 'strip_request_path=true' 

curl -i -X POST --url http://10.67.20.32:30001/apis/  --data 'name=sedorders' --data 'upstream_url=http://sedorders.default.svc.cluster.local:8080/'  --data 'request_path=/sedorders/'  --data 'strip_request_path=true' 
