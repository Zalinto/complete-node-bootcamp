// const fs = require('fs');
const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find({});
    
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        });
    } catch (error) {
        console.log("Error", error);
        res
            .status(404)
            .json({
                status: 'fail',
                message: 'Error fetching all tours', error
            })
    }
}

// /:id
exports.getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        // Tour.findOne({_id: req.params.id})

        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
    } catch (error) {
        console.log("Error", error);
        res
            .status(404)
            .json({
                status: 'fail',
                message: 'Error fetching all tours', error
            })
    }
}

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        console.log(newTour);
        
        res
            .status(201) // 201 means created
            .json({
                status: 'success',
                data: {
                    tour: newTour
                }
            });
    } catch (error) {
        console.log("Error", error);
        res
            .status(404)
            .json({
            status: 'fail',
            message: 'Invalid data sent!', error
        });
    }
    
}

exports.updateTour = async (req, res) => {
    try {
        const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res
            .status(201)
            .json({
                status: 'success',
                data: {
                    updatedTour
                }
            })
    } catch (error) {
        console.log("Error", error);
        res
            .status(404)
            .json({
            status: 'fail',
            message: 'Error updating data!', error
        });
    }   
}

exports.deleteTour = async (req,res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id)

        res
            .status(204)
            .json({
                status: 'success',
            })
    } catch (error) {
        console.log("Error", error);
        res
            .status(404)
            .json({
            status: 'fail',
            message: 'Error deleting data!', error
        });
    }
}