import datetime


class_member = 42
today = int(str(datetime.datetime.now().date()).split("-")[2])

def next_call(num:int,today:int,class_member:int) -> int:
    num_next_call = num + today
    if num_next_call>class_member:
        return int(num_next_call-class_member)
    else:
        return int(num_next_call)

print("今の出席番号: ",end="")
now = int(input())

print("次の番号 -> "+str(next_call(now,today,class_member)))
print("その次   -> "+str(next_call(next_call(now,today,class_member),today,class_member)))