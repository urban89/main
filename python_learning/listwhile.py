thelist = []
process = True
while process:
    desire = input("tell me your desire\n")
    thelist.append(desire)
    print(f"You're desires: {thelist}")
    if desire == "stop":
        process = False