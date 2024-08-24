package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

type Measurement struct {
	Name  string
	Min   float64
	Max   float64
	Sum   float64
	Count int
}

func (m Measurement) print() string {
	return m.Name + "=" + strconv.FormatFloat(m.Min, 'f', -1, 64) + "/" + strconv.FormatFloat(m.Sum/float64(m.Count), 'f', -1, 64) + "/" + strconv.FormatFloat(m.Max, 'f', -1, 64)
}

func main() {
	measurements, err := os.Open("measurements.txt")
	if err != nil {
		panic(err)
	}
	defer measurements.Close()

	data := make(map[string]Measurement, 5)

	scanner := bufio.NewScanner(measurements)
	for scanner.Scan() {
		line := scanner.Text()
		semicolon := strings.Index(line, ";")
		location := line[:semicolon]
		rawTemperature := line[semicolon+1:]
		temperature, _ := strconv.ParseFloat(rawTemperature, 64)

		measurement, ok := data[location]
		if ok {
			measurement.Min = min(measurement.Min, temperature)
		} else {
			measurement.Min = temperature
		}
		measurement.Max = max(measurement.Max, temperature)
		measurement.Sum += temperature
		measurement.Count += 1

		data[location] = measurement
	}

	locations := make([]string, 0, len(data))
	for name := range data {
		locations = append(locations, name)
	}

	sort.Strings(locations)

	fmt.Print("{")
	for _, name := range locations {
		measurement := data[name]
		measurement.Name = name

		fmt.Print(measurement.print())
		if measurement.Name != locations[len(locations)-1] {
			fmt.Print(", ")
		}
	}
	fmt.Print("}\n")
}
