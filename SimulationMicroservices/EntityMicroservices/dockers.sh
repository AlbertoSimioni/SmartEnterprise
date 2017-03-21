cd Availabilities
docker rmi -f asimioni/availabilities
docker build -t asimioni/availabilities .
docker push asimioni/availabilities

cd ..
cd Catalogs
docker rmi -f asimioni/catalogs
docker build -t asimioni/catalogs .
docker push asimioni/catalogs

cd ..
cd Products
docker rmi -f asimioni/products
docker build -t asimioni/products .
docker push asimioni/products


cd ..
cd Providers
docker rmi -f asimioni/providers
docker build -t asimioni/providers .
docker push asimioni/providers


cd ..
cd Clients
docker rmi -f asimioni/clients
docker build -t asimioni/clients .
docker push asimioni/clients


cd ..
cd Operators
docker rmi -f asimioni/operators
docker build -t asimioni/operators .
docker push asimioni/operators


cd ..
cd PurchasingOrders
docker rmi -f asimioni/purchasingorders
docker build -t asimioni/purchasingorders .
docker push asimioni/purchasingorders


cd ..
cd SalesOrders
docker rmi -f asimioni/salesorders
docker build -t asimioni/salesorders .
docker push asimioni/salesorders

cd ..
cd Warehouses
docker rmi -f asimioni/warehouses
docker build -t asimioni/warehouses .
docker push asimioni/warehouses

cd ..
cd Routes
docker rmi -f asimioni/routes
docker build -t asimioni/routes .
docker push asimioni/routes


cd ..
cd Trips
docker rmi -f asimioni/trips
docker build -t asimioni/trips .
docker push asimioni/trips


cd ..
cd Wares
docker rmi -f asimioni/wares
docker build -t asimioni/wares .
docker push asimioni/wares


cd ..
cd LoadingPlans
docker rmi -f asimioni/loadingplans
docker build -t asimioni/loadingplans .
docker push asimioni/loadingplans


cd ..
cd UnloadingPlans
docker rmi -f asimioni/unloadingplans
docker build -t asimioni/unloadingplans .
docker push asimioni/unloadingplans


cd ..
cd PaymentsIn
docker rmi -f asimioni/paymentsin
docker build -t asimioni/paymentsin .
docker push asimioni/paymentsin


cd ..
cd PaymentsOut
docker rmi -f asimioni/paymentsout
docker build -t asimioni/paymentsout .
docker push asimioni/paymentsout


cd ..
cd Invoices
docker rmi -f asimioni/invoices
docker build -t asimioni/invoices .
docker push asimioni/invoices
