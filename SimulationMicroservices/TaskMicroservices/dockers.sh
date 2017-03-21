cd AdD-Orders
docker rmi -f asimioni/addorders
docker build -t asimioni/addorders .
docker push asimioni/addorders

cd ..
cd AdD-Payments
docker rmi -f asimioni/addpayments
docker build -t asimioni/addpayments .
docker push asimioni/addpayments

cd ..
cd LoD-Orders
docker rmi -f asimioni/lodorders
docker build -t asimioni/lodorders .
docker push asimioni/lodorders


cd ..
cd LoD-Transports
docker rmi -f asimioni/lodtransports
docker build -t asimioni/lodtransports .
docker push asimioni/lodtransports


cd ..
cd LoD-Warehouses
docker rmi -f asimioni/lodwarehouses
docker build -t asimioni/lodwarehouses .
docker push asimioni/lodwarehouses


cd ..
cd PlD-Plans
docker rmi -f asimioni/pldplans
docker build -t asimioni/pldplans .
docker push asimioni/pldplans


cd ..
cd PuD-Availabilities
docker rmi -f asimioni/pudavailabilities
docker build -t asimioni/pudavailabilities .
docker push asimioni/pudavailabilities


cd ..
cd PuD-Orders
docker rmi -f asimioni/pudorders
docker build -t asimioni/pudorders .
docker push asimioni/pudorders

cd ..
cd SeD-Availabilities
docker rmi -f asimioni/sedavailabilities
docker build -t asimioni/sedavailabilities .
docker push asimioni/sedavailabilities

cd ..
cd PuD-Orders
docker rmi -f asimioni/pudorders
docker build -t asimioni/pudorders .
docker push asimioni/pudorders


cd ..
cd SeD-Availabilities
docker rmi -f asimioni/sedavailabilities
docker build -t asimioni/sedavailabilities .
docker push asimioni/sedavailabilities


cd ..
cd SeD-Catalogs
docker rmi -f asimioni/sedcatalogs
docker build -t asimioni/sedcatalogs .
docker push asimioni/sedcatalogs


cd ..
cd SeD-Orders
docker rmi -f asimioni/sedorders
docker build -t asimioni/sedorders .
docker push asimioni/sedorders
