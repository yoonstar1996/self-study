# print("롤러코스터에 오신것을 환영합니다!")
# height = int(input("당신의 키가 몇 cm인가요? "))

# if height >= 120:
#   print("재밌게 이용하세요.")
# else:
#   print("120cm 이상만 이용 가능합니다.")

# number = int(input("어떠한 숫자를 확인하고 싶나요?"))

# if number % 2 == 0:
#   print("짝수입니다.")
# else:
#   print("홀수입니다.")
  
# print("롤러코스터에 오신것을 환영합니다!")
# height = int(input("당신의 키가 몇 cm인가요? "))
# bill = 0

# if height >= 120:
#   print("이용 가능합니다.")
#   age = int(input("몇 살인가요?"))
  
#   if age <= 12:
#     print("아이는 $5입니다.")
#     bill += 5
#   elif age <= 18:
#     print("학생은 $7입니다.")
#     bill += 7
#   else:
#     print("성인은 $12입니다.")
#     bill += 12
    
#   wantsPhoto = input("포토 티켓을 원하시나요? 원하시면 Y, 아니면 N을 입력하세요.")
  
#   if wantsPhoto == "Y":
#     bill += 3
  
#   print(f"총 ${bill}입니다.")
    
# else:
#   print("120cm 이상만 이용 가능합니다.")

# print("파이썬 피자 배달에 오신걸 환영합니다!")
# size = input("어떤 피자 사이즈를 원하시나요? S, M or L: ")
# pepperoni = input("페퍼로니를 추가하시겠습니까? Y or N: ")
# extraCheese = input("치즈를 추가하시겠습니까? Y or N: ")

# bill = 0

# if size == "S":
#   bill += 15
# elif size == "M":
#   bill += 20
# elif size == "L":
#   bill += 25
# else:
#   print("잘못된 사이즈 입니다.")

# if pepperoni == "Y":
#   if size == "S":
#     bill += 2
#   else:
#     bill += 3

# if extraCheese == "Y":
#   bill += 1

# print(f"최종 금액은 ${bill}입니다.")

# print("롤러코스터에 오신것을 환영합니다!")
# height = int(input("당신의 키가 몇 cm인가요? "))
# bill = 0

# if height >= 120:
#   print("이용 가능합니다.")
#   age = int(input("몇 살인가요?"))
  
#   if age <= 12:
#     print("아이는 $5입니다.")
#     bill += 5
#   elif age <= 18:
#     print("학생은 $7입니다.")
#     bill += 7
#   elif 45 <= age <= 55:
#     bill += 0
#     print("해당 나이는 무료입니다.")
#   else:
#     print("성인은 $12입니다.")
#     bill += 12
    
#   wantsPhoto = input("포토 티켓을 원하시나요? 원하시면 Y, 아니면 N을 입력하세요.")
  
#   if wantsPhoto == "Y":
#     bill += 3
  
#   print(f"총 ${bill}입니다.")
    
# else:
#   print("120cm 이상만 이용 가능합니다.")

print("보물섬에 오신걸 환영합니다.\n당신의 미션은 보물을 찾는 것입니다.")
print("당신은 갈림길에 있습니다. 어느 쪽으로 가시겠습니까?")
first = input("    \"왼쪽\" or \"오른쪽\"\n")

if first == '왼쪽':
  print("당신은 호수에 도착했습니다. 호수의 가운데에 섬이 있습니다.")
  second = input("    기다려서 보트를 타시겠습니까-\"기다리기\", 수영하여 건너겠습니까?-\"수영\"\n")
  if second == "기다리기":
      print("당신은 섬에 도착했습니다. 3개의 문이 있는 집을 발견했습니다.")
      third = input("   \"빨간색\", \"노란색\", \"파란색\" 문이 있습니다. 어느 문을 선택하시겠습니까?\n")
      if third == "노란색":
        print("보물을 찾았습니다.")
      elif third == "빨간색" or "파란색":
        print("게임 오버")
      else:
        print("잘못된 선택입니다.")
        
  elif second == "수영":
    print("게임 오버")
  
  else:
    print("잘못된 선택입니다.")
      
elif first == "오른쪽":
  print("게임 오버")
  
else:
  print('잘못된 선택입니다.')
