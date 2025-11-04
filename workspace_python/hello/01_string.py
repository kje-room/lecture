# 문자열 곱하기
print('^' * 30)

# 길이 구하기
a = "text"
print(len(a))

# f 문자열 포매팅 기능
b = f'test test {a} test 두 개 뒤에 a 변수가 나오도록 넣음 중괄호 쓰면 된다'
print(b)

# 문자열 관련 함수

# 문자 개수
print(a.count('t'))

# 문자 위치 : index는 없으면 오류 발생하는 문제가 있음
print(a.find('t'))
print(a.index('t'))

# 문자열 대체
c = '1231234'
d = c.replace('123', 'qqq')
print(c)
print(d)