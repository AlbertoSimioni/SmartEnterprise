# -*- coding:utf-8 -*-
from __future__ import absolute_import
from __future__ import unicode_literals
from __future__ import print_function

import json
import uuid
import time
import gevent

from websocket import create_connection
import six

from array import *

from locust import HttpLocust, TaskSet, task
from locust.events import request_success

class EchoTaskSet(TaskSet):
    def on_start(self):
        self.user_id = six.text_type(uuid.uuid4())
        ws = create_connection('ws://127.0.0.1:5000/echo')
        self.ws = ws
        self.counter = 0
        self.start_times = []
    

        def _receive():
            while True:
                res = ws.recv()
                data = json.loads(res)
                end_at = time.time()
                response_time = int((end_at - self.start_times[data['counter']]) * 1000)
                request_success.fire(
                    request_type='WebSocket Recv',
                    name='test/ws/echo',
                    response_time=response_time,
                    response_length=len(res),
                )

        gevent.spawn(_receive)

    def on_quit(self):
        self.ws.close()

    @task
    def sent(self):
        start_at = time.time() #in sencondi
        self.start_times.append(start_at)
        body = json.dumps({'message': 'hello, world','counter':self.counter, 'user_id': self.user_id})
        self.ws.send(body)
        request_success.fire(
            request_type='WebSocket Sent',
            name='test/ws/echo',
            response_time=int((time.time() - start_at) * 1000),
            response_length=len(body),
        )
        self.counter = self.counter + 1


class EchoLocust(HttpLocust):
    host = "ws://127.0.0.1:5000/"
    task_set = EchoTaskSet
    min_wait = 1000
    max_wait = 3000
