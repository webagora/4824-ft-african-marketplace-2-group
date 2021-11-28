#   ft-african-marketplace-2-group

Hello Build Weeks team- welcome to your project channel!

-   Your team will be working on Anywhere Fitness
-   You can check out the product canvas [here: ](https://www.notion.so/African-Marketplace-a449bf95188440b29436334e870c8f3e)
-   books  If ya haven’t already, check out the [FT Build Weeks Student Guide: ](https://www.notion.so/lambdaschool/Build-Week-Student-Guide-Full-time-1995e4ff529e40db9f240f46c3d2afd3) -  This will cover anything you need for your Build Week.

##  Attention all Unit 2 web students:

-   If you have not already, please refer to the Build Week Orientation recording, which you can find [here:](https://youtu.be/_hMsnHkCf-0)  This covers everything you need to know about what we do in Build Week and you can get through it pretty quickly if ya watch at 1.5x!
-   Please make sure that you and all Unit 2 team mates are in the main ```#bw_ft``` and ```#bw_help``` channels! I won’t be dropping any further announcements in your cohort channels and only in the ```#bw_ft``` channel from here on out.
-   If you have any problems- missing team members I might not aware of or anything else: send me a DM directly. I will not see your message here, even if you “@” me. 

##  African marketplace

###  Pitch 

Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty. 

You will build a platform to enable these business owners to create listing for items they have for sale. 

### MVP

1. A small business `owner` can login and see relevant prices in various categories to help them set their own prices.

2. They can also make listing for `items` they want to sell, which will show up to all `users`.

3. They add a new `item` by selecting their market `location` and typing in their item's `name`, `description`, and `price`.

## 🏃‍♀️**Stretch**

1. A business owner can upload their picture to their profile.

## 📦 Additional Resources

**Proof of concept:**

[http://sautiafrica.org/](http://sautiafrica.org/)

**Example product reference list:** [https://docs.google.com/spreadsheets/d/1cbJQL1JbO5pAV4mss1yH0uMp58lF8TkKZt6NPkF9NLg/edit#gid=0](https://docs.google.com/spreadsheets/d/1cbJQL1JbO5pAV4mss1yH0uMp58lF8TkKZt6NPkF9NLg/edit#gid=0)


## API 

-   Base URL: `https://lbs-african-marketplace.herokuapp.com`

### [POST] /auth/login

- Login
  - _username and password required_
  - _provides a newly created token_

_What you send:_

```json
{
  "username": "somebuyer",
  "password": "password"
}
```

_What you receive:_

```json
{
    "message": "Welcome somebuyer!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxNiwidXNlcm5hbWUiOiJzb21lYnV5ZXIiLCJkZXBhcnRtZW50IjoiYnV5ZXIiLCJpYXQiOjE2Mzc2MDg5NTksImV4cCI6MTYzNzYxMjU1OX0.uNZK8cMdLMYmtzvBB-aY9oIxT1g23MNLZp-c01xl24o"
}
```

_What you send:_

```json
{
  "username": "someseller",
  "password": "password"
}
```

_What you receive:_

```json
{
    "message": "Welcome someseller!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxNywidXNlcm5hbWUiOiJzb21lc2VsbGVyIiwiZGVwYXJ0bWVudCI6InNlbGxlciIsImlhdCI6MTYzNzYwOTAwMywiZXhwIjoxNjM3NjEyNjAzfQ.R1dMzRhpLbwIWOb0FZCyNKLbXSK3fiQsOGgobR-MUOY"
}
```

