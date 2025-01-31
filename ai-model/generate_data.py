import random
import pandas as pd

# Defining the dataset parameters
cities = ['Quetta', 'Karachi', 'Lahore', 'Peshwar', 'Hyderabad']
professions = ['Web Developer', 'Salesman', 'E-commerce Product', 'Marketing']
platforms = ['YouTube', 'Facebook', 'Instagram', 'Google Ads']

# Number of clients (rows)
num_clients = 75

# Generating the artificial data
data = []

for _ in range(num_clients):
    city = random.choice(cities)
    profession = random.choice(professions)
    platform = random.choice(platforms)
    impressions = random.randint(1000, 10000)  # Random number of impressions
    clicks = int(impressions * random.uniform(0.05, 0.15))  # Random number of clicks (5%-15% CTR)
    conversions = int(clicks * random.uniform(0.02, 0.1))  # Random conversion rate (2%-10%)
    ad_spend = random.randint(100, 5000)  # Random ad spend
    ctr = (clicks / impressions) * 100  # Click-through rate (percentage)

    # Append the data for each client
    data.append([city, profession, platform, impressions, clicks, conversions, ad_spend, ctr])

# Creating the DataFrame
df = pd.DataFrame(data, columns=[
    'City', 'Profession', 'Platform', 'Impressions', 'Clicks', 'Conversions', 'Ad Spend', 'CTR'])

# Show the first few rows of the dataset
print(df.head())

# Optionally, save the data to a CSV file
df.to_csv('artificial_ad_campaign_data.csv', index=False)
