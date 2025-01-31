import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Load dataset
df = pd.read_csv('artificial_ad_campaign_data.csv')

# Prepare features (X) and target variable (y)
X = df[['Impressions', 'Clicks', 'Ad Spend', 'City', 'Profession', 'Platform']]
y = df['Conversions']

# Convert categorical variables into numeric (one-hot encoding)
X = pd.get_dummies(X, drop_first=True)

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Save the trained model
joblib.dump(model, 'ad_campaign_model.pkl')

# **Save model column names (Important!)**
joblib.dump(X_train.columns.tolist(), "model_columns.pkl")  # **<--- Add this line here**

print("Model training complete. Model and column names saved.")
