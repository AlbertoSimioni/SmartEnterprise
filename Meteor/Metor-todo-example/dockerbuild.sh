#richiede che meteor sia installato sul proprio PC
sudo rm -r /tmp/export-meteor/
meteor build --architecture=os.linux.x86_64 --directory /tmp/export-meteor/build
cat >/tmp/export-meteor/Dockerfile <<ENDHERE
FROM ulexus/meteor
COPY build /home/meteor/www
RUN chown -R meteor:meteor /home/meteor/
ENDHERE
cd /tmp/export-meteor
docker build -t asimioni/my-meteor-bundle .
docker push asimioni/my-meteor-bundle
