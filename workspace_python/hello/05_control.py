money = 10000

if(money > 10000) :
    print('taxi~')

if money == 10000 :
    pass

탈것 = "택시" if money > 10000 else "뚜벅이"
print(탈것)

diner = ['메뉴1', '메뉴2', '메뉴3']

for i, menu in enumerate(diner) :
    print(i, menu)
    
val = 'c'
match val :
    case 'a' :
        print('AA')
    case 'b' :
        print('BB')
    case 'c' :
        print('CC')
    case _ :
        print('default')