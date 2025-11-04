def main() :
    try :
        # print(123)
        a = 20
        print('a', a)
    except :
        print(f'오류 발생 : {e}')
    finally :
        print('항상 실행')
        
main(1)
print('after a: ', a)
print(__name__)