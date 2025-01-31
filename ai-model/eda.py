import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
df = pd.read_csv('artificial_ad_campaign_data.csv')

# Basic summary of the data
print(df.describe())

# Check for missing values
print(df.isnull().sum())

# Visualizing the data (Example)
# City-wise impressions
plt.figure(figsize=(10, 6))
sns.barplot(x='City', y='Impressions', data=df)
plt.title('City-wise Impressions')
plt.show()

# City-wise conversion rate (CTR)
plt.figure(figsize=(10, 6))
sns.barplot(x='City', y='CTR', data=df)
plt.title('City-wise Click-Through Rate (CTR)')
plt.show()

# You can add more visualizations based on your insights
