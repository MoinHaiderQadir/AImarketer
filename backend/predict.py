import sys
import joblib
import json
import pandas as pd

# Load the trained model
model = joblib.load('ad_campaign_model.pkl')

# Read input data from Node.js (Express)
input_data = json.loads(sys.argv[1])

# Convert input to DataFrame
df = pd.DataFrame([input_data])

# Encode categorical variables to match training format
df = pd.get_dummies(df, drop_first=True)

# Ensure columns match the trained model
expected_columns = joblib.load("model_columns.pkl")  # Save model column names separately
missing_cols = set(expected_columns) - set(df.columns)
for col in missing_cols:
    df[col] = 0  # Add missing columns with default 0

# Reorder columns
df = df[expected_columns]

# Make prediction
prediction = model.predict(df)

# Send the prediction result back to Node.js
print(prediction[0])
sys.stdout.flush()
