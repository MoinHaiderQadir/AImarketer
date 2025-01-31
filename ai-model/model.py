import os
import sys
import joblib
import pandas as pd

# Define absolute path to model files
script_dir = os.path.dirname(__file__)  # Get the directory of the script
model_path = os.path.join(script_dir, "ad_campaign_model.pkl")
columns_path = os.path.join(script_dir, "model_columns.pkl")

# Load model and column names
model = joblib.load(model_path)
columns = joblib.load(columns_path)

# Get input data from Express.js
impressions = float(sys.argv[1])
clicks = float(sys.argv[2])
ad_spend = float(sys.argv[3])
city = sys.argv[4]
profession = sys.argv[5]
platform = sys.argv[6]

# Create DataFrame for prediction
input_data = pd.DataFrame([[impressions, clicks, ad_spend, city, profession, platform]], 
                          columns=["Impressions", "Clicks", "Ad Spend", "City", "Profession", "Platform"])
input_data = pd.get_dummies(input_data)

# Ensure all columns exist
for col in columns:
    if col not in input_data:
        input_data[col] = 0  # Add missing columns

input_data = input_data[columns]

# Make prediction
prediction = model.predict(input_data)[0]
print(prediction)
