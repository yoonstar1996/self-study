# name = "Yoonstar"
# length = len(name)

# print(name[length - 1])

# print(True)

# print(type("Yoonstar"))
# print(type(8))
# print(type(1.2))
# print(type(True))

# print(type(str(123)))
# print(type(int("123")))

# length = len(input("당신의 이름을 입력하세요. "))
# print(type(length))

# print("당신의 이름의 길이는: " + str(length))

# print(10 + 3)
# print(10 - 3)
# print(10 * 3)
# print(10 / 3)
# print(10 // 3)
# print(10 % 3)
# print(10 ** 3)

# print(round(2.345, 1))
# print(round(2.345, 2))
# print(round(2.543, 1))
# print(round(2.543, 2))

# score = 10
# score += 5

# print(score)

# name = "Yoonstar"
# age = 29
# print(f"저의 이름은 {name}이고, {age}살 입니다.")

print("팁 계산기에 오신걸 환영합니다.")
totalBill = float(input("총합 얼마입니까? $"))
tipPercent = int(input("몇 퍼센트의 팁을 지불할 생각인가요? 10, 12 또는 15?"))
tipBill = (totalBill * (tipPercent / 100))
peopleNumber = int(input("몇 명이 나눠서 계산하나요?"))
finalPay = round((totalBill + tipBill) / peopleNumber, 2)
print(f"각 사람이 낼 금액: ${finalPay} 입니다.")