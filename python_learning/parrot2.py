prompt = "\nhey hey hey rerica  "

active = True
while active:
    message = input(prompt)
    
    if message == 'stop':
        active = False
    else:
        print(message)