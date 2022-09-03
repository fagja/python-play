from selenium import webdriver
from time import sleep
import chromedriver_binary

driver = webdriver.Chrome()

driver.get("https://tinder.com/")
sleep(30)
