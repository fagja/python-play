from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep
import chromedriver_binary

driver = webdriver.Chrome()
driver.implicitly_wait(10)

# tinderトップページを開く
driver.get("https://tinder.com/app/recs")
sleep(5)

# いいね実行
for i in range(50):
    driver.find_element_by_xpath('//body').send_keys(Keys.RIGHT)
    sleep(3)

driver.close()
