package main

import (
	"log/slog"
	"net/http"
	"os"
	"search-movie-api/api"
	"time"
)

func main() {
	if err := run(); err != nil {
		slog.Error("failed to run code: ", "error", err)
		os.Exit(1)
	}
	slog.Info("all systems are offline")
}

func run() error {
	apiKey := os.Getenv("OMDB_KEY")
	handler := api.NewHandler(apiKey)

	s := http.Server{
		Addr:         ":8080",
		Handler:      handler,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  time.Minute,
	}

	if err := s.ListenAndServe(); err != nil {
		return err
	}

	return nil
}
