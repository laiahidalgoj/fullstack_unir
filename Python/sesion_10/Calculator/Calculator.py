class Calculator:
    brand = 'Casio'
    result = 0

    #don't need __init__ method because I have a property initialized
    def sum(self, *numbers):
        sum = 0
        for number in numbers:
            sum += number
        self.result = sum
        return self.result
    
    def subtract(self, n1, n2):
        if n1 > n2:
            self.result = n1 - n2
        elif n1 < n2:
            self.result = n2 - n1
            return self.result

    def pow(self, base, exponent):
        self.result = base**exponent
        return self.result

    def printResult(self):
        print(f'The result of operation is: {self.result}')