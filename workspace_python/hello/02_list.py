a = ['영', '일', '이', '삼', '사']
print(a[-2])
print(a[-0])

b = 'abcdef'
print(b[2])

c = [1, 2, 3, 4]
c = []
c = list()

print(a[0:2])
print(a[1:2])
print(a[1:20])
print(a[10:20])

print(a[1:])
print(a[:3])

d = ['오', '육', '칠']
print(a + d)
print((a+d)*3)
print(len(a))
# print(1 + 'a')

del a[1]

# range(시작, 종료, step)
# 전달인자가 하나인 경우 0~10 바로 전까지 1씩 증가
r = list(range(10))
print(r)
print(list(range(4, 10, 2)))
print(list(range(40, 10, -2)))