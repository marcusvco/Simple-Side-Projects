package omdb

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Result struct {
	Search       []Search `json:"Search"`
	TotalResults string   `json:"totalResults"`
	Response     string   `json:"Response"`
}

type Search struct {
	Title  string `json:"Title"`
	Year   string `json:"Year"`
	ImdbID string `json:"imdbID"`
	Type   string `json:"Type"`
	Poster string `json:"Poster"`
}

func SearchMovie(apiKey, title string) (Result, error) {
	resp, err := http.Get("http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + title)
	if err != nil {
		return Result{}, fmt.Errorf("failed to make request to omdb: %w", err)
	}
	defer resp.Body.Close()

	var result Result
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return Result{}, fmt.Errorf("failed to decode response from omdb: %w", err)
	}
	defer resp.Body.Close()

	return result, nil
}
