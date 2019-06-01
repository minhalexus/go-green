import numpy as np
import pandas as pd
from sklearn.tree import DecisionTreeClassifier

pd.set_option('display.max_rows', 100)
pd.set_option('display.max_columns', 128)
pd.set_option('display.width', 5000)

df = pd.read_csv('SampleData.csv')

y = df['Result']
df = df.drop('Result', axis=1)


df = pd.get_dummies(df, columns=['Gender'])

#print(df)

# model = DecisionTreeClassifier()
# model.fit(df, y)

# Import the model we are using
from sklearn.ensemble import RandomForestClassifier
# Instantiate model with 1000 decision trees
model = RandomForestClassifier(n_estimators = 1000, random_state = 42)
# Train the model on training data
model.fit(df, y)

print(model.predict([[300,400,0,0]])[-1])
print(model.predict([[300,5000,0,1]])[-1])

