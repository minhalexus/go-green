import sys
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

df = pd.read_csv('natural-gas-prices.csv')

df = df.drop('Code', axis=1)

mean_consumption = 1715.906749
mean_production = 1376.898850

df = df.fillna(df.mean())

y = df['Gas - Prices (US dollars per MWh)']
df = df.drop('Gas - Prices (US dollars per MWh)', axis=1)
df = df.drop('Entity', axis=1)

# Mean coal cosumption 7522.123413
# Mean Coal Production 6.692538

reg = LinearRegression().fit(df, y)
# # #

result = []
for i in range(int(sys.argv[-2]), int(sys.argv[-1])):
    result.append(reg.predict(np.array([[i, mean_consumption, mean_production]]))[0] * float(sys.argv[1]))

print(result)



############################ COAL REGRESSION ########################################

df = pd.read_csv('coal_csv.csv')

df = df.drop('Code', axis=1)
df = df.drop('Reserve', axis=1)

df = df.fillna(df.mean())

y = df['Coal - Prices (US dollars per megawatt-hour)']
df = df.drop('Coal - Prices (US dollars per megawatt-hour)', axis=1)
df = df.drop('Entity', axis=1)

# Mean coal cosumption 7522.123413
# Mean Coal Production 6.692538

reg = LinearRegression().fit(df, y)
# #
result = []

for i in range(int(sys.argv[-2]), int(sys.argv[-1])):
    result.append(reg.predict(np.array([[i, 7522, 7]]))[0] * float(sys.argv[2]))

print(result)


############################## OIL REGRESSION #########################################

df = pd.read_csv('pump-price-for-gasoline-us-per-liter-2.csv')

df = df.drop('Code', axis=1)

df = df.fillna(df.mean())

mean_production = 193.369331
mean_consumption = 319.224521

y = df['Pump price for gasoline (US$ per liter) (US$ per liter)']
df = df.drop('Pump price for gasoline (US$ per liter) (US$ per liter)', axis=1)
df = df.drop('Entity', axis=1)

# # Mean coal cosumption 7522.123413
# # Mean Coal Production 6.692538
#
reg = LinearRegression().fit(df, y)
# # #
#
result = []
for i in range(int(sys.argv[-2]), int(sys.argv[-1])):
    result.append(reg.predict(np.array([[i, mean_production, mean_consumption]]))[0]*10 * float(sys.argv[3]))

print(result)

############################## Hydro Regression ########################################

df = pd.read_csv('hydropower.csv')

df = df.drop('Code', axis=1)
df = df.drop('Consumption', axis=1)

df = df.fillna(df.mean())

mean_production = 182.692037

y = df['Investment in Renewables by Region (IRENA (2016)) (international-$)']
df = df.drop('Investment in Renewables by Region (IRENA (2016)) (international-$)', axis=1)
df = df.drop('Entity', axis=1)

# Mean coal cosumption 7522.123413
# Mean Coal Production 6.692538

reg = LinearRegression().fit(df, y)
# #

result = []
for i in range(int(sys.argv[-2]), int(sys.argv[-1])):
    result.append(reg.predict(np.array([[i, mean_production]]))[0]/1000000000 * float(sys.argv[4]))

print(result)

############################### Solar Regression ##########################################

df = pd.read_csv('solar.csv')

df = df.drop('Code', axis=1)

df = df.fillna(df.mean())

mean_consumption = 5.818743
mean_production = 4.260637

y = df['Investment in Renewables by Region (IRENA (2016)) (international-$)']
df = df.drop('Investment in Renewables by Region (IRENA (2016)) (international-$)', axis=1)
df = df.drop('Entity', axis=1)

# Mean coal cosumption 7522.123413
# Mean Coal Production 6.692538

reg = LinearRegression().fit(df, y)
# #
result = []
for i in range(int(sys.argv[-2]), int(sys.argv[-1])):
    result.append(reg.predict(np.array([[i, mean_consumption, mean_production]]))[0]/1000000000 * float(sys.argv[5]))

print(result)