from selenium import webdriver
from time import sleep

email = ""
password = ""
max_count = ""

# ブラウザを開く。
driver = webdriver.Chrome()

# Tinderへアクセス
driver.get("https://tinder.com/")
sleep(5)

# Facebookの認証
faceB = driver.find_element(
    By.XPath,
)

fruit = driver.find_element(By.CSS_SELECTOR, "#fruits .tomatoes")
