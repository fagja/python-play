from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep
import chromedriver_binary

driver = webdriver.Chrome()
driver.implicitly_wait(5)

# tinderトップページを開く
driver.get("https://tinder.com/")
# sleep(5)

# ログイン完了待機
print("ログイン操作を行ってください！")
input("位置情報の提供許可などのポップアップを消した後にyキーを入力してください。")

# いいね実行
for i in range(3):
    driver.find_element_by_xpath("//body").send_keys(Keys.RIGHT)
    sleep(3)

driver.close()
