a = 10
b = 3
c = a / b
print(c)
print(a // 3)
print(-a // 3)
print(int(-3.3))

print(a % b)

# print(int('12' + 3))

print(type(a))

d, e, f = 10, 20, 30

e, f = f, e

g = None # null 대신 none 사용
h = True
i = False

# True는 False가 아닌 것.
# False = 0, 0.0, 빈 컨테이너, False, None

a = 3 > 5
b = 3 < 7
print(a)
print(a and b)

# 튜플 : 값을 바꿀 수 없는 리스트

t1 = 1,2,3
print(t1)
print(type(t1))

t2 = 1          # int 1
t3 = (1)        # int 1
t4 = (1, )      # 1개짜리 튜플
t5 = 1,         # t4와 동일

t6 = tuple(range(4))
print(t6)