def chatbot():
    user_input = input("You: ")
    
    if user_input.lower() == "hi":
        print("Bandhobi: আমি আর তোমার সাথে বান্ধবী সম্পর্ক রাখতে পারবো না।")
        user_input = input("You: ")
        
        if "কেন" in user_input:
            print("Bandhobi: কিছু না, অনেক দিন বান্ধবী থাকছি। আর না 😒")
            user_input = input("You: ")

            if "তাহলে" in user_input:
                print("Bandhobi: বুঝো না, কি চাই 😑")
                user_input = input("You: ")

                if "না" in user_input:
                    print("Bandhobi: না বুঝলে মুড়ি খাও, আমাকে আর মেসেজ দিয়ো না!")
                    print("\n**Your girlfriend has permanently blocked you.**")

chatbot()